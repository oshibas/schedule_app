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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignID('user_id')
                ->constrained()
                ->cascadeOnDelete()
                ->casecadeOnUpdate();
            //$table->bigInteger('user_id');  // 対応するカラムのデータ型と同じにする
            $table->string('title');
            $table->string('body');
            $table->string('start');
            $table->string('end');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
