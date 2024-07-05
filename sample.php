<?php

$conn = new mysqli('localhost','root','','sdd');

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query('select trainingTitle from trainings');

$array = array();


if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $item['title'] = $row['trainingTitle'];
        $item['category'] = 'training';

        $array[] = $item;
    }
}

$result = $conn->query('select activityTitle from events');


if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $item['title'] = $row['activityTitle'];
        $item['category'] = 'events';

        $array[] = $item;
    }
}

echo json_encode($array);
