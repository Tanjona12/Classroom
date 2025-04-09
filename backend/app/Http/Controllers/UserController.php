<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterUser;
use App\Http\Requests\LoginUser;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index() {
        return User::all();
    }

    public function indexID($id) {
        return User::find($id);
    }

    public function register(RegisterUser $request)
    {
        try {
            $user = new User();
            $user->nom = $request->nom;
            $user->email = $request->email;
            $user->promotion = $request->promotion;
            $user->password = Hash::make($request->password, [
                'rounds' => 12
            ]);
            $user->save();

            return response()->json([
                'success' => true,
                'message' => 'Utilisateur enregistré avec succès',
                'user' => $user
            ], 201);  // Code 201 pour création réussie

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de l\'enregistrement de l\'utilisateur',
                'error' => $e->getMessage()
            ], 500);  // Code 500 pour une erreur serveur
        }
    }

    public function login(LoginUser $request)
    {
        if(auth()->attempt($request->only(['email', 'password']))){

            $user = auth()->user();
            $token = $user->createToken('MA_CLE_SECRET_BACK')->plainTextToken;

            return response()->json([
                'status_code' => 200,
                'status_message' => 'Utilisateur connecté.',
                'user' => $user,
                'token' => $token
            ]);

        }else{
            // si les info ne correspondent a aucun utilisateur 

            return response()->json([
                'status_code' => 403,
                'status_message' => 'Information non valide.',
            ]);
        }
    }

}

