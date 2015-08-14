 //<>//
String[] chapters = {
  "chapter01_drawing", 
  "chapter02_processing", 
  "chapter03_flow", 
  "chapter04_variables", 
  "chapter05_conditionals", 
  "chapter06_loops", 
  "chapter07_functions", 
  "chapter08_objects", 
  "chapter09_arrays", 
  "chapter10_algorithms", 
  "chapter11_nothing",
  "chapter12_nothing",
  "chapter13_mathematics", 
  "chapter14_transformations", 
  "chapter15_images_pixels", 
  "chapter16_video", 
  "chapter17_strings", 
  "chapter18_data", 
  "chapter19_data_streams", 
  "chapter20_sound", 
  "chapter21_exporting", 
  "chapter22_advanced_oop", 
  "chapter23_java" 
};

void setup() {
  String path = "/Users/danielshiffman/Documents/LP/LearningProcessing";

  ArrayList<File> todo = new ArrayList<File>();
  File[] files = listFiles(path);
  for (int i = 0; i < files.length; i++) {
    if (files[i].getName().charAt(0) == 'c') {
      File[] subfiles = listFiles(files[i].getAbsolutePath());
      for (int j = 0; j < subfiles.length; j++) {
        if (subfiles[j].getName().length() > 8) {
          String n = subfiles[j].getName().substring(0, 7); 
          if (n.equals("example")) {
            todo.add(subfiles[j]);
          }
        }
      }
    }
  }

  for (File f : todo) {
    String name = f.getName();
    String originalname = name;
    //println("Processing: " + name);
    int a = name.indexOf("_");
    int b = name.indexOf("_", a+1);
    int c = name.indexOf("_", b+1);
    String chapter = name.substring(a+1, b);
    String number = name.substring(b+1, c);
    name = name.replaceAll("_", "-");
    PrintWriter output = createWriter("examples/2015-08-13-"+name+".html");

    String title = name.substring(c+1, name.length());
    title = title.replaceAll("_", " ");
    title = title.replaceAll("-", " ");

    output.println("---");
    output.println("layout: examples");
    output.println("permalink: /examples/chp" + chapter +"/" + name);
    output.println("title: " + title);
    output.println("chapter: " + chapter);
    output.println("number: " + number);
    
    String cdn = "https://cdn.rawgit.com/shiffman/LearningProcessing-p5.js/master/";
    String chpname = chapters[int(chapter)-1]; 
    
    String raw = "https://raw.githubusercontent.com/shiffman/LearningProcessing/master/";
    output.println("js-files: " + cdn + chpname + "/" + originalname + "/sketch.js");
    output.println("pde-files: " + raw + chpname + "/" + originalname + "/" + originalname + ".pde");
    output.println("group: example");
    output.println("---");
    output.flush();
    output.close();
  }

  println("complete");
  exit();
}