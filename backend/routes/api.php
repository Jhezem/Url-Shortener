<?php

use App\Http\Controllers\UrlController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

//get all urls
Route::get('all', [UrlController::class, 'index']);

//get 20 most viewed urls
Route::get('most-viewed', [UrlController::class, 'most_viewed']);

// create shorten url most be logged in
Route::middleware(['auth:sanctum'])->post('short', [UrlController::class, 'store']);


//get shorten url
Route::get('shorten-url/{key}', [UrlController::class, 'show']);