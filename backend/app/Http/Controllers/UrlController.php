<?php

namespace App\Http\Controllers;

use App\Models\Url;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class UrlController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return Url::all();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function most_viewed()
    {
        $most_viewed = Url::orderBy('views', 'desc')->take(20)->get();

        if($most_viewed){
            return $most_viewed;
        }

        return response()->json([
            'res' => 204,
        ]);  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if($request->original_url){

            if(!filter_var($request->original_url, FILTER_VALIDATE_URL)){
                return response()->json([
                    'res' => false,
                    'msg' => 'Bad url provided, include http or https'
                ]);                
            }

            $newUrl = Url::create([
                'original_url' => $request->original_url,
                'views' => 0,
                'shorten_url' => Str::random(6),
            ]);

            return response()->json([
                'res' => true,
                'msg' => 'url shortened succesfully',
                'data' => $newUrl
            ]);
        }

        return response()->json([
            'res' => false,
            'msg' => 'Not url shortened'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $key
     * @return \Illuminate\Http\Response
     */
    public function show($key)
    {
        $short_url = Url::where('shorten_url', $key)->first();

        if($short_url){
            $short_url->update([
                'views' => $short_url->views + 1
            ]);
            return $short_url;
        }

        return response()->json([
            'res' => 204,
            'msg' => 'no link found'
        ]);  
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
