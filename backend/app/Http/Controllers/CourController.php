<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateCourRequest;
use App\Http\Requests\CreateContentCourRequest;
use App\Models\Cour;
use App\Models\ContentCours;
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

    public function createContentCour(CreateContentCourRequest $request) {
        try{
            $content = new ContentCours();

            $content->titre = $request->titre;
            $content->message = $request->message;
            $content->id_cour = $request->id_cour;

            if ($request->hasFile('file')) {
                $file = $request->file('file');
    
                // Génère un nom unique pour éviter les conflits
                $fileName = time() . '_' . $file->getClientOriginalName();
    
                // Stocke dans storage/app/public/content_files
                $filePath = $file->storeAs('public/content_files', $fileName);
    
                // Stocke le chemin relatif (ex: storage/content_files/nomfichier.pdf)
                $content->file = 'storage/content_files/' . $fileName;
            }

            $content->save();

            return response()->json([
                'success' => true,
                'message' => 'Content enregistrée avec succès.',
                'content' => $content
        ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de l\'enregistrement.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getContentCour($id) {
        return ContentCours::where('id_cour', $id)->get();
    }
}
