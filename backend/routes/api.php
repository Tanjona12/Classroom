<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\CourController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('promotion', [PromotionController::class, 'index']);
Route::post('promotion/create', [PromotionController::class, 'createPromotion']);

Route::get('cour', [CourController::class, 'index']);
Route::post('cour/create', [CourController::class, 'createCour']);

Route::get('ListEtudiants', [UserController::class, 'index']);
Route::get('ListEtudiant/{id}', [UserController::class, 'indexID']);


Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);


