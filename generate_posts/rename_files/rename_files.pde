import java.nio.file.*; //<>//

String what = "exercise";

void setup() {
  String path = "/Users/danielshiffman/Documents/LP/LearningProcessing-p5.js";

  ArrayList<File> todo = new ArrayList<File>();
  File[] files = listFiles(path);
  for (int i = 0; i < files.length; i++) {
    if (files[i].getName().charAt(0) == 'c') {
      File[] subfiles = listFiles(files[i].getAbsolutePath());
      for (int j = 0; j < subfiles.length; j++) {
        if (subfiles[j].getName().length() > 8) {
          String n = subfiles[j].getName().substring(0, what.length()); 
          if (n.equals(what)) {
            todo.add(subfiles[j]);
          }
        }
      }
    }
  }


  for (File file : todo) {
    String filepath = file.getAbsolutePath();
    String name = file.getName();
    String newpath = filepath.replaceAll(what+"_(\\d)_", what+"_0$1_");
    String newname = name.replaceAll(what+"_(\\d)_", what+"_0$1_");
    newpath = newpath.replaceAll("_(\\d)_", "_0$1_");
    newname = newname.replaceAll("_(\\d)_", "_0$1_");

    Path sourcePath1      = Paths.get(filepath);
    Path destinationPath1 = Paths.get(newpath);
    try {
      Files.move(sourcePath1, destinationPath1, StandardCopyOption.REPLACE_EXISTING);
    } 
    catch (Exception e) {
      e.printStackTrace();
    }
    
    //delay(1000);

    //Path sourcePath2      = Paths.get(newpath + "/" + name + ".pde");
    //Path destinationPath2 = Paths.get(newpath + "/" + newname + ".pde");
    //println(sourcePath2);
    //println(destinationPath2);
    //try {
    //  Files.move(sourcePath2, destinationPath2, StandardCopyOption.REPLACE_EXISTING);
    //} 
    //catch (Exception e) {
    //  e.printStackTrace();
    //}
    //break;
  }

  println("complete");
  exit();
}