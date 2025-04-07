<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreatePromotionRequest;
use App\Models\Promotion;
use Exception;

class PromotionController extends Controller
{
    public function index() {
        return Promotion::all();
    }

    public function createPromotion(CreatePromotionRequest $request) {
        try{
            $promotion = new Promotion();
            $promotion->promotion=$request->promotion;
            $promotion->save();

            return response()->json([
                'success' => true,
                'message' => 'Promotion enregistrée avec succès.',
                'promotion' => $promotion
        ]);
        }catch(Exception){
            return response()->json($e);
        }
    }
}
