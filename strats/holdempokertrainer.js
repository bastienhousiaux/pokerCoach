var orc={
    "UTG":{
        "AA KK AKs":0,
        "AKo AKs KQs QQ QJs JJ TT 99 88":1,
        "AQo AJs":2,
        "AJo ATs A5s A4s A3s A2s KQo KJs KTs QTs T9s 98s 87s 77 66 55":3
    },
    "MP":{
        "AA KK AKs AKo QQ":0,
        "AQs KQs AJs QJs JJ JTs TT T9s 99 88":1,
        "AQo KQo ATs KJs":2,
        "AJo ATo KJo QJo A9s A8s A7s A6s A5s A4s A3s A2s KTs K9s QTs Q9s J9s 98s 87s 76s 77 66 55 44 33 22":3
    },
    "CO":{
        "AA KK AKs AKo QQ":0,
        "AQs KQs AJs ATs QJs JJ JTs TT T9s 99 98s 88 77 66":1,
        "AQo KQo A5s A4s A3s A2s":2,
        "AJo ATo A9o A9s A8s A7s A6s KJo KTo KJs KTs K9s QJo QTo QTs Q9s JTo J9o J9s J8s T9o T8s 97s 87s 86s 76s 75s 65s 55 44 33 22":3
    },
    "BU":{
        "AA KK AKs AKo QQ":0,
        "AQo AJo AQs AJs ATs A5s A4s A3s A2s KQo KJo KQs KJs KTs QJo QJs QTs JJ JTs J9s TT T9s T8s 99 98s 97s 88 87s 86s 77 76s 75s 66 65s 55 54s 44":1,
        "ATo A9s A8s A7s A6s K9s Q9s":2,
        "A9o A8o A7o A6o A5o A4o A3o A2o KTo K9o K8o QTo Q9o Q8o JTo J9o J8o T9o T8o 98o 87o 76o K8s K7s K6s K5s K4s K3s K2s Q8s Q7s Q6s Q5s J8s J7s J6s T7s T6s 96s 85s 64s 33 22":3
    },
    "SB":{
        "AA KK QQ JJ AKo AKs AQs":0,
        "AQo KQo AJs ATs KJs KTs QJs QTs JTs T9s 98s 87s TT 99 88 77 66 55":1,
        "AJo ATo KQs A5s A4s A3s A2s":2,
        "A9o A8o A7o A6o A5o A4o A3o A2o KJo KTo K9o K8o K7o QJo QTo Q9o JTo J9o T9o 98o A9s A8s A7s A6s K9s K8s K7s K6s K5s K4s K3s K2s Q9s Q8s Q7s J9s J8s J7s T8s T7s 97s 86s 76s 65s 54s 44 33 22":3
    },
    "BB":{
        "AA KK QQ JJ AKo AKs AQs":0,
        "AQo KQo AJs ATs KJs KTs QJs QTs JTs T9s 98s 87s TT 99 88 77 66 55":1,
        "AJo ATo KQs A5s A4s A3s A2s":2,
        "A9o A8o A7o A6o A5o A4o A3o A2o KJo KTo K9o K8o K7o QJo QTo Q9o JTo J9o T9o 98o A9s A8s A7s A6s K9s K8s K7s K6s K5s K4s K3s K2s Q9s Q8s Q7s J9s J8s J7s T8s T7s 97s 86s 76s 65s 54s 44 33 22":3
    }
}

var def={
    "*":{
        "UTG MP":{
            "AA KK QQ AKs AKo":0,
            "AQo A5s A4s A3s A2s":2,
            "AQs AJs ATs KQs KJs QJs QTs JTs JJ TT 99 88 77 66":3
        }
    },
    "BTN":{
        "CO":{
            "AKs AKo KK QQ A5s A4s A3s A2s":0,
            "AA AQo 87s":1,
            "KTs J9s T8s 97s 76s":2,
            "AJo ATo AQs AJs ATs KQo KQs KJs QJs QTs JTs T9s 98s JJ TT 99 88 77 66 55 44 33 22":3
        }
    },
    "SB":{
        "CO":{
            "AKo AKs AQs AQo A5s A4s A3s A2s KK QQ JJ TT 99":0,
            "AA AJs KQs KJs":1,
            "ATs AJo ATo KQo KJo KTs QJs QTs JTs T9s 98s 87s 88 77":2
        },
        "BTN":{
            "AKo AQo AKs AQs A5s A4s A3s A2s KK QQ JJ TT 99":0,
            "AA AJs KQs KJs":1,
            "AJo ATo ATs A9s A8s A7s A6s KQo KJo KTs K9s QJo QJs QTs Q9s JTs J9s T9s T8s 98s 97s 87s 76s 65s 88 77 66":2
        }
    },
    "BB":{
        "CO":{
            "AKs AKo AQo AQs A9s A8s KK QQ JJ":0,
            "AA KQs":1,
            "ATo A7s A6s QJo K9s Q9s":2,
            "AJo ATs A5s A4s A3s A2s KQo KJo KJs KTs QJs QTs JTs J9s T9s T8s 98s 87s 76s TT 99 88 77 66 55 44 33 22":3
        },
        "BTN":{
            "AKo AQo AKs AQs A5s A4s A3s A2s KK QQ JJ TT":0,
            "AA AJs KQs":1,
            "AJo KQo KJs K5s K4s K3s K2s Q6s Q5s J7s J6s J5s T7s T6s T5s 96s 95s 86s 85s 75s 65s 54s 43s":2,
            "ATo A9o A8o A7o KJo KTo K9o JTo J9o T9o ATs A9s A8s A7s A6s KTs K9s K8s K7s K6s QJs QTs Q9s Q8s Q7s JTs J9s J8s T9s T8s 98s 97s 87s 76s 99 88 77 66 55 44 33 22":3
        },
        "SB":{
            "AKo AQo AKs AQs KK QQ JJ TT":0,
            "AA AJs KQs KJs":1,
            "A5o A4o A3o A2o K4s K3s K2s Q4s Q3s Q2s 64s 54s 53s 43s":2,
            "AJo ATo A9o A8o A7o A6o ATs A9s A8s A7s A6s A5s A4s A3s A2s KQo KJo KTo K9o K8o K7o KTs K9s K8s K7s K6s K5s QJo QTo Q9o Q8o QJs QTs Q9s Q8s Q7s Q6s Q5s JTo J9o J8o JTs J9s J8s J7s J6s T9o T8o T9s T8s T7s T6s 98o 97o 98s 97s 96s 87o 86o 87s 86s 85s 76o 76s 75s 65s 99 88 77 66 55 44 33 22":3
        }
    }
}

var orcActions=["4 bet all in 5 bet","call 3 bet","4 bet as a bluff","2 bet fold 3 bet"];
var defActions=["3 bet and 5 bet","3 bet call 4 bet","3 bet fold 4 bet","call 2 bet"];