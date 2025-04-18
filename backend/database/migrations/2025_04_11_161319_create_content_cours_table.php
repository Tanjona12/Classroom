<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
    Schema::create('content_cours', function (Blueprint $table) {
        $table->id();
        $table->string("titre");
        $table->string("message");
        $table->unsignedBigInteger("id_cour");
        $table->string("file")->nullable();
        $table->timestamps();
    });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('content_cours');
    }
};
