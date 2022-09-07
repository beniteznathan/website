<?php

namespace App\Http\Controllers;

use App\Http\Requests\Home\ContactUsRequest;
use App\Models\ContactUs;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class HomeController extends Controller
{
    /**
     * Store home contact us request
     *
     * @param ContactUsRequest  $request
     * @return JsonResponse
     */
    public function createContactUs(ContactUsRequest $request): JsonResponse
    {
        $contactUs = ContactUs::create($request->only([
            'name',
            'email',
            'service',
            'message'
        ]));

        return response()->json([
            'data' => $contactUs,
            'message' => 'Successfully submitted contact us'
        ], Response::HTTP_CREATED);
    }
}
