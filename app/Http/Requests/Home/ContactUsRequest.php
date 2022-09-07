<?php

namespace App\Http\Requests\Home;

use App\Models\ContactUs;
use Illuminate\Foundation\Http\FormRequest;

class ContactUsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $services = implode(',', array_keys(ContactUs::SERVICES));

        return [
            'name' => 'required',
            'email' => 'required|email',
            'service' => "required|in:$services",
            'message' => 'required'
        ];
    }
}
