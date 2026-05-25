<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, string $plan = 'check')
    {

        // dd($plan);
        //
        // return $request->user()
        // ->newSubscription('default', $plan)
        // // ->trailDays(5)
        // // ->allowPromotionCodes()
        // ->checkout([
        //     'success_url' => route("success"),
        //     'cancel_url' => route("dashboard")
        // ]);
        return $request->user()
        ->newSubscription('default', 'price_1TXfBwSGYhlPOZM2L7STMfbK')
        ->checkout();
    }
}