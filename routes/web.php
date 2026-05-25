<?php

use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\PayPalController;

use App\Events\MessageSent;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/success', function () {
    return Inertia::render('Success/Success');
})->middleware(['auth', 'verified'])->name('success');


Route::get('/pricing', function () {
    return Inertia::render('Pricing/Pricing');
})->middleware(['auth', 'verified'])->name('pricing');

// Route::get('/checkout/{plan}', CheckoutController::class)->middleware(['auth', 'verified'])->name('checkout');
Route::get("/checkout/{plan}",function(Request $request,$plan){
    // return "Hello world ". $request->user();

    // dd([
    //     'user' => $request->user(),
    //     'plan' => $plan,
    //     'stripe_key' => config('cashier.key'),
    //     'stripe_secret' => config('cashier.secret'),
    //     'stripe_webhook' => config('cashier.webhook'),
    // ]);
    return $request->user()->newSubscription('default', $plan)->checkout([
            'success_url' => route('success'),
            'cancel_url' => route('dashboard'),
        ]);
})->middleware(['auth', 'verified'])->name('checkout');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/paypal', function () {
    return Inertia::render('Paypal/Paypal');
})->middleware(['auth', 'verified'])->name('paypal');


// Route::get('/paypal-payment', [PayPalController::class, 'payment'])->middleware(['auth', 'verified'])->name('paypal.payment');

// Route::get('/paypal-success', [PayPalController::class, 'success'])->middleware(['auth', 'verified'])->name('paypal.success');

// Route::get('/paypal-cancel', [PayPalController::class, 'cancel'])->middleware(['auth', 'verified'])->name('paypal.cancel');
Route::get('/send-message', function () {

    event(new MessageSent("Hello from Laravel Dashboard"));

    return "Broad Message Sent";
})->middleware(['auth', 'verified'])->name('send');

// Route::get('/listen', function(){ return Inertia::render('listen'); })->middleware(['auth', 'verified'])->name('listen');

require __DIR__.'/auth.php';