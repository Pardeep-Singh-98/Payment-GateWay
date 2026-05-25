<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PayPalController extends Controller
{
    public function payment()
    {
        $provider = new PayPalClient;
        dd($provider); return;

        // $provider->setApiCredentials(config('paypal'));

        // $provider->getAccessToken();

        // $response = $provider->createOrder([
        //     "intent" => "CAPTURE",            
        //     "purchase_units" => [
        //         [
        //             "reference_id" => "123",
        //             "amount" => [
        //                 "currency_code" => "USD",
        //                 "value" => "10.00"
        //             ]
        //         ]
        //     ],
        //     "payment_source" => [
        //         "paypal" => [
        //             "address" => [
        //                 "address_line_1" => "2211 N First Street",
        //                 "address_line_2" => "17.3.160",
        //                 "admin_area_1" => "CA",
        //                 "admin_area_2" => "San Jose",
        //                 "postal_code" => "12345",
        //                 "country_code" => "US",
        //             ],
        //             "email_address" => "demo@gmail.com",
        //             "payment_method_preference" => "IMMEDIATE_PAYMENT_REQUIRED",
        //             "experience_context" => [
        //                 "return_url" => "https://example.com/returnUrl",
        //                 "cancel_url" => "https://example.com/cancelUrl"
        //             ]
        //         ]
        //     ]
        // ]);

        // dd($response);

        // if (isset($response['id']) && $response['id'] != null) {

        //     foreach ($response['links'] as $links) {

        //         if ($links['rel'] == 'approve') {

        //             return redirect()->away($links['href']);
        //         }
        //     }

        //     return "Something went wrong.";
        // }

        // return $response;
    }

    public function success(Request $request)
    {
        // dd(config('paypal')); return;
        // $provider = new PayPalClient;

        // $provider->setApiCredentials(config('paypal'));

        // $provider->getAccessToken();

        // $response = $provider->capturePaymentOrder($request['token']);

        // return response()->json($response);
    }

    public function cancel()
    {
        return "Payment Cancelled";
    }
}