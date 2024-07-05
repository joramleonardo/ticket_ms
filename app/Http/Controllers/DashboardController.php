<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use App\Employee;
use App\Training;
use App\Health;
use App\Client;
use App\Requestt;
use App\Evaluation;
use App\ResearchLog;
use App\MaterialRequestt;
use App\Event;
use App\Speaker;
use App\Participants;
use App\Manuscript;
use App\Researcher;
use App\Tbllogbook;

class DashboardController extends Controller
{
    public function index(){}

    public function setMonth(Request $request){
        
        $filter_month = \Request::get('filter_month');
        $request->session()->put('month', $filter_month); 
        return $request->session()->get('month');
    }

    public function setYear(Request $request){
        $filter_year = \Request::get('filter_year');
        $request->session()->put('year', $filter_year); 
        return $request->session()->get('year');
    }

    // ========================== LIBRARY ========================== //

    public function getResearchInterests(Request $request){
        $material_requestts = MaterialRequestt::orderBy('created_at', 'desc')
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->whereRaw("researchInterests != ''")
        ->paginate(120);
        return response()->json($material_requestts, 200);
    }

    public function getTopicNotFound(Request $request){
        $material_requestts = MaterialRequestt::orderBy('created_at', 'desc')
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->whereRaw("topic != '' && topic != 'None' && topic != 'NA' && topic != 'N/A'")
        ->paginate(120);
        return response()->json($material_requestts, 200);
    }

    public function getTotalClients(){
        $material_requestts = MaterialRequestt::orderBy('created_at', 'desc')
        ->paginate();
        return response()->json($material_requestts, 200);
    }

    public function getTotalMaterialsServed(){       
    }

    public function getTotalMaterialsReferred(){       
    }

    public function getMaterialRequest_ageBracket_female(Request $request){
        $data = MaterialRequestt::select(
            array(
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='20 years old and below' then 1 else 0 end)) as age1"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='21 - 25 years old' then 1 else 0 end)) as age2"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='26 - 30 years old' then 1 else 0 end)) as age3"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='31 - 35 years old' then 1 else 0 end)) as age4"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='36 - 40 years old' then 1 else 0 end)) as age5"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='41 - 45 years old' then 1 else 0 end)) as age6"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='46 - 50 years old' then 1 else 0 end)) as age7"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='51 - 55 years old' then 1 else 0 end)) as age8"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='56 - 60 years old' then 1 else 0 end)) as age9"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='61 years old and above' then 1 else 0 end)) as age10"),
            )
        )
        ->where('sex','female')
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }

    public function getMaterialRequest_ageBracket_male(Request $request){
        $data = MaterialRequestt::select(
            array(
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='20 years old and below' then 1 else 0 end)) as age1"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='21 - 25 years old' then 1 else 0 end)) as age2"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='26 - 30 years old' then 1 else 0 end)) as age3"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='31 - 35 years old' then 1 else 0 end)) as age4"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='36 - 40 years old' then 1 else 0 end)) as age5"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='41 - 45 years old' then 1 else 0 end)) as age6"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='46 - 50 years old' then 1 else 0 end)) as age7"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='51 - 55 years old' then 1 else 0 end)) as age8"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='56 - 60 years old' then 1 else 0 end)) as age9"),
                MaterialRequestt::raw("SUM((CASE WHEN ageBracket='61 years old and above' then 1 else 0 end)) as age10"),
            )
        )
        ->where('sex','male')
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }

    public function getMaterialRequest_clientType_female(Request $request){
        $data = MaterialRequestt::select(
            array(
                MaterialRequestt::raw("SUM((CASE WHEN clientType='Walk-in / On-site' then 1 else 0 end)) as clientType1"),
                MaterialRequestt::raw("SUM((CASE WHEN clientType='Online' then 1 else 0 end)) as clientType2"),
                MaterialRequestt::raw("SUM((CASE WHEN clientType='Library Tour/Visit' then 1 else 0 end)) as clientType3"),
            )
        )
        ->where('sex','female')
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }

    public function getMaterialRequest_clientType_male(Request $request){
        $data = MaterialRequestt::select(
            array(
                MaterialRequestt::raw("SUM((CASE WHEN clientType='Walk-in / On-site' then 1 else 0 end)) as clientType1"),
                MaterialRequestt::raw("SUM((CASE WHEN clientType='Online' then 1 else 0 end)) as clientType2"),
                MaterialRequestt::raw("SUM((CASE WHEN clientType='Library Tour/Visit' then 1 else 0 end)) as clientType3"),
            )
        )
        ->where('sex','male')
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }

    public function getMaterialRequest_clientCategory_female(Request $request){
        $data = MaterialRequestt::select(
            array(
                MaterialRequestt::raw("SUM((CASE WHEN category='Student' then 1 else 0 end)) as category1"),
                MaterialRequestt::raw("SUM((CASE WHEN category='Professional' then 1 else 0 end)) as category2"),
            )
        )
        ->where('sex','female')
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }

    public function getMaterialRequest_clientCategory_male(Request $request){
        $data = MaterialRequestt::select(
            array(
                MaterialRequestt::raw("SUM((CASE WHEN category='Student' then 1 else 0 end)) as category1"),
                MaterialRequestt::raw("SUM((CASE WHEN category='Professional' then 1 else 0 end)) as category2"),
            )
        )
        ->where('sex','male')
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }
    public function getMaterialRequest_region_female(Request $request){
        $data = MaterialRequestt::select(
            array(
                MaterialRequestt::raw("SUM((CASE WHEN region='Cordillera Administrative Region' then 1 else 0 end)) as rCAR"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region I' then 1 else 0 end)) as r1"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region II' then 1 else 0 end)) as r2"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region III' then 1 else 0 end)) as r3"),
                MaterialRequestt::raw("SUM((CASE WHEN region='National Capital Region' then 1 else 0 end)) as rNCR"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region IV-A' then 1 else 0 end)) as r4a"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region IV-B' then 1 else 0 end)) as r4b"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region V' then 1 else 0 end)) as r5"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region VI' then 1 else 0 end)) as r6"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region VII' then 1 else 0 end)) as r7"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region VIII' then 1 else 0 end)) as r8"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region IX' then 1 else 0 end)) as r9"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region X' then 1 else 0 end)) as r10"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region XI' then 1 else 0 end)) as r11"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region XII' then 1 else 0 end)) as r12"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Caraga Region' then 1 else 0 end)) as rCARAGA"),
                MaterialRequestt::raw("SUM((CASE WHEN region='BARMM' then 1 else 0 end)) as rBARMM"),
            )
        )
        ->where('sex','female')
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }
    public function getMaterialRequest_region_male(Request $request){
        $data = MaterialRequestt::select(
            array(
                MaterialRequestt::raw("SUM((CASE WHEN region='Cordillera Administrative Region' then 1 else 0 end)) as rCAR"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region I' then 1 else 0 end)) as r1"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region II' then 1 else 0 end)) as r2"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region III' then 1 else 0 end)) as r3"),
                MaterialRequestt::raw("SUM((CASE WHEN region='National Capital Region' then 1 else 0 end)) as rNCR"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region IV-A' then 1 else 0 end)) as r4a"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region IV-B' then 1 else 0 end)) as r4b"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region V' then 1 else 0 end)) as r5"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region VI' then 1 else 0 end)) as r6"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region VII' then 1 else 0 end)) as r7"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region VIII' then 1 else 0 end)) as r8"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region IX' then 1 else 0 end)) as r9"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region X' then 1 else 0 end)) as r10"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region XI' then 1 else 0 end)) as r11"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Region XII' then 1 else 0 end)) as r12"),
                MaterialRequestt::raw("SUM((CASE WHEN region='Caraga Region' then 1 else 0 end)) as rCARAGA"),
                MaterialRequestt::raw("SUM((CASE WHEN region='BARMM' then 1 else 0 end)) as rBARMM"),
            )
        )
        ->where('sex','male')
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }

    // ========================== SJA ========================== //


    public function getSJA_eventTitle_female(Request $request){
        $data = Participants::select(
            array(
                Participants::raw("SUM((CASE WHEN event_id='5' then 1 else 0 end)) as event1"),
                Participants::raw("SUM((CASE WHEN event_id='6' then 1 else 0 end)) as event2"),
                Participants::raw("SUM((CASE WHEN event_id='7' then 1 else 0 end)) as event3"),
            )
        )
        ->where('sex','female')
        ->get();
        return response()->json($data, 200);
    }

    public function getSJA_eventTitle_male(Request $request){
        $data = Participants::select(
            array(
                Participants::raw("SUM((CASE WHEN event_id='5' then 1 else 0 end)) as event1"),
                Participants::raw("SUM((CASE WHEN event_id='6' then 1 else 0 end)) as event2"),
                Participants::raw("SUM((CASE WHEN event_id='7' then 1 else 0 end)) as event3"),
            )
        )
        ->where('sex','male')
        ->get();
        return response()->json($data, 200);
    }

    public function getSJA_eventData_female(Request $request){ 
        $data = Participants::select(
            array(
                Participants::raw("SUM((CASE WHEN sex='female' then 1 else 0 end)) as totalFemale")
            )
        )
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }

    public function getSJA_eventData_male(Request $request){
        $data = Participants::select(
            array(
                Participants::raw("SUM((CASE WHEN sex='male' then 1 else 0 end)) as totalMale")
            )
        )
        ->whereMonth('created_at', '=', $request->session()->get('month'))
        ->whereYear('created_at', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }

    public function  getSJA_eventListNoDate(Request $request){
        $dateYear = $request->session()->get('year');
        $dateMonth = $request->session()->get('month');
        $data = DB::select(
                    "SELECT COUNT(`participants`.`event_id`) as totalParticipants,
                        SUM((CASE WHEN `participants`.`sex`='female' then 1 else null end)) as female,  
                        SUM((CASE WHEN `participants`.`sex`='male' then 1 else null end)) as male,      
                        `events`.*
                        FROM `events` 
                        INNER JOIN `participants`
                        ON `events`.`id`=`participants`.`event_id`
                        GROUP BY `events`.`id`");
        return response()->json($data, 200);
    }

    public function  getSJA_eventList(Request $request){
        $dateYear = $request->session()->get('year');
        $dateMonth = $request->session()->get('month');
        $data = DB::select(
                    "SELECT COUNT(`participants`.`event_id`) as totalParticipants,
                        SUM((CASE WHEN `participants`.`sex`='female' then 1 else null end)) as female,  
                        SUM((CASE WHEN `participants`.`sex`='male' then 1 else null end)) as male,      
                        `events`.*
                        FROM `events` 
                        INNER JOIN `participants`
                        ON `events`.`id`=`participants`.`event_id`
                        WHERE YEAR(`events`.`date`)=$dateYear && MONTH(`events`.`date`)=$dateMonth
                        GROUP BY `events`.`id`");
        return response()->json($data, 200);
    }

    public function getHR_trainingsList(Request $request){
        $dateYear = $request->session()->get('year');
        $dateMonth = $request->session()->get('month');
        $data = DB::select(
                       "SELECT 
                       COUNT(`training_participants`.`training_id`) as totalParticipants,
                       `trainings`.* 
                       FROM `trainings` 
                       INNER JOIN `training_participants` 
                       ON `trainings`.`id`=`training_participants`.`training_id` 
                        WHERE YEAR(startDate)=$dateYear && MONTH(startDate)=$dateMonth
                       GROUP BY `trainings`.`id`
                       ");
        // dd($data);
        return response()->json($data, 200);
    }

    public function getHR_countParticipants(Request $request){
        $dateYear = $request->session()->get('year');
        $dateMonth = $request->session()->get('month');
        $data = DB::select(
                       "SELECT 
                       COUNT(`training_participants`.`training_id`) as totalParticipants,
                       `trainings`.* 
                       FROM `trainings` 
                       INNER JOIN `training_participants` 
                       ON `trainings`.`id`=`training_participants`.`training_id` 
                        WHERE YEAR(startDate)=$dateYear && MONTH(startDate)=$dateMonth
                       ");
        // dd($data);
        return response()->json($data, 200);
    }

    public function getHR_countTrainings(Request $request){
        $dateYear = $request->session()->get('year');
        $dateMonth = $request->session()->get('month');
        $data = DB::select(
                       "SELECT 
                       COUNT(*) as totalTrainings
                       FROM `trainings` 
                        WHERE YEAR(startDate)=$dateYear && MONTH(startDate)=$dateMonth
                       ");
        // dd($data);
        return response()->json($data, 200);
    }

    // ========================== STARBOOKS ========================== //

    public function getSTARBOOKS_logbookList(Request $request){
        $dateYear = $request->session()->get('year');
        $dateMonth = $request->session()->get('month');
        $data = DB::select(
                       "SELECT 
                        COUNT(*) as totalParticipants, 
                        SUM((CASE WHEN intGender='1' then 1 else null end)) as femaleParticipants, 
                        SUM((CASE WHEN intGender='0' then 1 else null end)) as maleParticipants, 
                        SUM((CASE WHEN intGender='2' then 1 else null end)) as preferNotToSayParticipants, 
                        SUM((CASE WHEN intGender is NULL then 1 else null end)) as undefined
                        FROM tbllogbooks 
                        WHERE YEAR(Date)=$dateYear && MONTH(Date)=$dateMonth
                       ");
        // dd($data);
        return response()->json($data, 200);
    }
    

    public function getSTARBOOKS_category_female(Request $request){
        $data = Tbllogbook::select(
            array(
                Tbllogbook::raw("SUM((CASE WHEN intCategory='1' then 1 else 0 end)) as category1"),
                Tbllogbook::raw("SUM((CASE WHEN intCategory='2' then 1 else 0 end)) as category2"),
                Tbllogbook::raw("SUM((CASE WHEN intCategory='3' then 1 else 0 end)) as category3"),
                Tbllogbook::raw("SUM((CASE WHEN intCategory='4' then 1 else 0 end)) as category4"),
                Tbllogbook::raw("SUM((CASE WHEN intCategory='5' then 1 else 0 end)) as category5"),
                Tbllogbook::raw("SUM((CASE WHEN intCategory='6' then 1 else 0 end)) as category6"),
            )
        )
        ->where('intGender','1')
        ->whereMonth('Date', '=', $request->session()->get('month'))
        ->whereYear('Date', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }

    public function getSTARBOOKS_category_male(Request $request){
        $data = Tbllogbook::select(
            array(
                Tbllogbook::raw("SUM((CASE WHEN intCategory='1' then 1 else 0 end)) as category1"),
                Tbllogbook::raw("SUM((CASE WHEN intCategory='2' then 1 else 0 end)) as category2"),
                Tbllogbook::raw("SUM((CASE WHEN intCategory='3' then 1 else 0 end)) as category3"),
                Tbllogbook::raw("SUM((CASE WHEN intCategory='4' then 1 else 0 end)) as category4"),
                Tbllogbook::raw("SUM((CASE WHEN intCategory='5' then 1 else 0 end)) as category5"),
                Tbllogbook::raw("SUM((CASE WHEN intCategory='6' then 1 else 0 end)) as category6"),
            )
        )
        ->where('intGender','0')
        ->whereMonth('Date', '=', $request->session()->get('month'))
        ->whereYear('Date', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }
    
    public function getSTARBOOKS_schoolType_female(Request $request){
        $data = Tbllogbook::select(
            array(
                Tbllogbook::raw("SUM((CASE WHEN SchoolType='1' then 1 else 0 end)) as schoolType1"),
                Tbllogbook::raw("SUM((CASE WHEN SchoolType='2' then 1 else 0 end)) as schoolType2"),
            )
        )
        ->where('intGender','1')
        ->whereMonth('Date', '=', $request->session()->get('month'))
        ->whereYear('Date', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }
    
    public function getSTARBOOKS_schoolType_male(Request $request){
        $data = Tbllogbook::select(
            array(
                Tbllogbook::raw("SUM((CASE WHEN SchoolType='1' then 1 else 0 end)) as schoolType1"),
                Tbllogbook::raw("SUM((CASE WHEN SchoolType='2' then 1 else 0 end)) as schoolType2"),
            )
        )
        ->where('intGender','0')
        ->whereMonth('Date', '=', $request->session()->get('month'))
        ->whereYear('Date', '=', $request->session()->get('year'))
        ->get();
        return response()->json($data, 200);
    }

    // ========================== HR ========================== //

    

}
