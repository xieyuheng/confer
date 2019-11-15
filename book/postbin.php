<?php

// https://postb.in/api

function bin() {
    $url = "https://postb.in/api/bin";
    $result = file_get_contents($url, false, stream_context_create([
        "http" => [
            "method" => "POST",
        ]
    ]));
    return json_decode($result, true);
}

function bin_req($bin_id, $req) {
    $url = "https://postb.in/$bin_id";
    $req_id = file_get_contents($url, false, stream_context_create($req));
    return $req_id;
}

function bin_get($bin_id, $req_id) {
    $url = "https://postb.in/api/bin/$bin_id/req/$req_id";
    $result = file_get_contents($url, false, stream_context_create([
        "http" => [
            "method" => "GET",
        ]
    ]));
    return json_decode($result, true);
}
