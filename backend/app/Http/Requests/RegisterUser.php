<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class RegisterUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom'=> 'required',
            'email'=> 'required|unique:users,email',
            'promotion'=> 'required',
            'password'=> 'required'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'status_code' => 422,
            'error' => true,
            'message' => 'Erreur de validation',
            'errorsList' => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'nom.required'=>'Ne laisse pas vider votre nom',
            'email.required'=>"Ne laisse pas vide l'email",
            'email.unique'=>'Cette email existe déja',
            'promotion.required'=>'Ne laisse pas vide la promotion',
            'password.required'=>'Le mot de passe est requis'
        ];
    }
}
