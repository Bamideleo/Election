<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\create_main;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [create_main::class, 'index'])->name('home');
Route::get('/unit', [create_main::class, 'PollingUint'])->name('unit');
Route::get('/area', [create_main::class, 'LocalArea'])->name('area');
Route::post('/areas', [create_main::class, 'Area'])->name('areas');
Route::get('/units', [create_main::class, 'NewPollingUnit'])->name('units');
Route::post('/units', [create_main::class, 'NewPoll'])->name('units');

