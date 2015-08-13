 //<>//
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
    //println("Processing: " + name);
    int a = name.indexOf("_");
    int b = name.indexOf("_", a+1);
    int c = name.indexOf("_", b+1);
    int chapter = int(name.substring(a+1, b));
    int number = int(name.substring(b+1, c));
    name = name.replaceAll("_","-");
    PrintWriter output = createWriter("examples/2015-08-13-"+name+".html");
    
    String title = name.substring(c+1,name.length());
    title = title.replaceAll("_", " ");
    title = title.replaceAll("-", " ");

    output.println("---");
    output.println("layout: examples");
    output.println("permalink: /examples/chp" + chapter +"/" + name);
    output.println("title: " + title);
    output.println("chapter: " + chapter);
    output.println("number: " + number);
    output.println("js-files: https://cdn.rawgit.com/shiffman/LearningProcessing-p5.js/master/chp01_drawing/example_1_1_stroke_fill/sketch.js");
    output.println("pde-files: https://raw.githubusercontent.com/shiffman/LearningProcessing/master/chp01_drawing/example_1_1_stroke_fill/example_1_1_stroke_fill.pde");
    output.println("group: example");
    output.println("---");
    output.flush();
    output.close();
  }
  
  println("complete");
  exit();
}