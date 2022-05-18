<?php 
$curURL = "./" . $data["_controller"] . "/" . $data["_action"];

$currentPage = $_SESSION["currentPage"];
if ($currentPage > 1)
{
    $prevPage = $currentPage - 1;
    echo "<a href=".$curURL."/".$prevPage.">&laquo;</a>";
}

$pageCount = $_SESSION["pageCount"];

for ($i = ($currentPage - 8); $i <= ($currentPage + 8); $i++)
{

    if ($i != $currentPage)
    {
        if ($i > 0 && $i <= $pageCount)
        {
            echo "<a href=".$curURL."/".$i.">$i</a>";
        }
    }
    else
    {
		echo "<a href=".$curURL."/".$i." class=\"active\">$i</a>";
    }
}

if ($currentPage < $pageCount)
{
    $nextPage = $currentPage + 1;
    echo "<a href=".$curURL."/".$nextPage.">&raquo;</a>";
}
?>