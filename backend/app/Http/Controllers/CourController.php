<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateCourRequest;
use App\Models\Cour;
use Exception;

class CourController extends Controller
{
    public function index() {
        return Cour::all();
    }

    public function createCour(CreateCourRequest $request) {
        try{
            $cour = new Cour();
            $cour->nomCour=$request->nomCour;
            $cour->promotion=$request->promotion;
            $cour->save();

            return response()->json([
                'success' => true,
                'message' => 'Cour enregistrée avec succès.',
                'cour' => $cour
        ]);
        }catch(Exception){
            return response()->json($e);
        }
    }
}
