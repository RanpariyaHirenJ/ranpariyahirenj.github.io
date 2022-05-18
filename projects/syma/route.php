<?php
// ob_start();

class route {  

    private $path = ""; 
    public function __construct()
    {
        $url = $this->url();        
    
        if(!empty($url)){
                                                                           
                if(file_exists($this->path.$url . ".html")){
                    include($this->path.$url . ".html");
                    exit();
                }else if(file_exists($this->path.$url . ".php")){
                    include($this->path.$url . ".php");
                    exit();
                }else if(strstr($this->path.$url,".html")){
                    $this->path.$url = str_replace(".html","",$this->path.$url);
                    header("location:/".$this->path.$url);
                    die();
                }else{
                    header('location:/404');
                    include("404.html");
                    exit();
                }            
        }
        else{
            include("index.html");
        }   
    }

    public function url(){
        if(isset($_GET['url'])){
            
            $url = $_GET['url'];                                                
            
            if(!empty($url)){                       
                $lastchar = substr($url,(strlen($url)-1),strlen($url)); 

                if($lastchar == "/"){                                                   
                    header('location:/404');
                    include("404.html");
                    exit();
                }
            }

            if(!empty($url)){                       

                if($url == "index.html" || $url == "index"){                                                   
                    header('location:/');
                    exit();
                }
            }
                   
            $url = rtrim($url,'/');
            $url = filter_var($url, FILTER_SANITIZE_URL);
            $url = explode("/", $url);
            $k = $url;
            $sliced = array_slice($k, 0, -1); // array ( "Hello", "World" )
            $string = implode(" ", $sliced);  // "Hello World";
            if(!empty($string)){
                $this->path = $string."/";
            }else{
                $this->path = $string;
            }
            
            return end($url);
        }
    }

}

new route();

?>