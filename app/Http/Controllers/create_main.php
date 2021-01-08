<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class create_main extends Controller
{
    public function index()
    {
      return view('home.main');
    }


    public function PollingUint()
    {
        $unit = DB::table('polling_unit')->leftjoin('announced_pu_results','announced_pu_results.polling_unit_uniqueid',
    '=','polling_unit.uniqueid')->get();
        return view('home.pollingunit',compact('unit'));
    }

    public function LocalArea()
    {
     $area = DB::table('lga')->leftjoin('announced_lga_results','announced_lga_results.lga_name','=','lga.lga_id')
     ->rightjoin('states','states.state_id','=','lga.state_id')->get();
     return view('home.localgov',compact('area'));

    }
    public function Area(Request $request)
    {
       $result = DB::table('lga')->get();
       $result->lga_id = $request->lga_name;
       $pro = DB::table('announced_lga_results')->where('lga_name',$request->lga_name)->get();
       return view('home.sum',compact('pro'));
    }

    public function NewPollingUnit()
    {
        $ward= DB::table('ward')->get();
        $local = DB::table('lga')->get();
        $polling = DB::table('polling_unit')->get();
       return view('home.newpolling',compact('ward','local','polling'));
    }
    public function NewPoll(Request $request)
    {
        $this->validate($request,[
            'polling_unit_name'=>'required',
            'polling_unit_id'=>'required',
            'ward_id' =>'required',
            'polling_unit_description' =>'required',
            'lga_id' =>'required',
           ]);
           $polling = DB::table('polling_unit')->insert([
            'polling_unit_name'=> $request->get('polling_unit_name'),
            'polling_unit_id'=> $request->get('polling_unit_id'),
            'ward_id'=> $request->get('ward_id'),
            'polling_unit_description'=> $request->get('polling_unit_description'),
            'lga_id'=> $request->get('lga_id'),
        ]);
        return redirect()->back()->with('message','Polling Unit Has Been Added');
    }


}
