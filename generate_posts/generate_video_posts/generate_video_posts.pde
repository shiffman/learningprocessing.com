void setup() { //<>//
  String path = "/Users/danielshiffman/Documents/sites/icm.shiffman.net/_posts";

  File[] allposts = listFiles(path);

  for (int i = 0; i < allposts.length; i++) {
    //for (int i = 0; i < 1; i++) {
    String[] data = loadStrings(allposts[i].getAbsolutePath());
    String fulltext = join(data, " ");


    String title = data[2];
    //println(title);
    title = title.substring(8, title.length()-1);

    int dot = title.indexOf(".");
    int chapter = int(title.substring(0, dot));
    int space = title.indexOf(" ");
    int number = int(title.substring(dot+1, space));

    String name = title.substring(space+1, title.length());
    //String perma = name.replaceAll(" ", "-");

    String video = data[3];
    //println(video);
    String vidnum = video.substring(27, video.length());
    //println(vidnum);

    PrintWriter output = createWriter("videos/2015-08-15-"+chapter+"-"+number+".html");
    output.println("---");


    //title: Built-in variables (mouseX,mouseY)
    //permalink: /videos/3-1
    //chapter: 3
    //number: 1
    //video: http://player.vimeo.com/video/71597763
    //downloadcode: none
    //group: video

    output.println("layout: videos");
    output.println("title: " + name);

    //println(name);
    output.println("permalink: /videos/"+chapter+"-"+number);
    output.println("chapter: " + chapter);
    output.println("number: " + number);
    output.println("video: http://player.vimeo.com/video/" + vidnum);
    output.println("downloadcode: none");
    output.println("group: video");

    String[][] annotations = matchAll(fulltext, 
      "<div data-start=\"(\\d+:\\d+)\" data-end=\"(\\d+:\\d+)\">\\s+(.*?)\\s+</div>");
    //if (annotations != null) {
      output.println("annotations: ");
      for (int j = 0; j < annotations.length; j++) {
        output.println("- start: " + annotations[j][1]);
        output.println("  end: " + annotations[j][2]);
        output.println("  content: " + annotations[j][3]);
        //  // optional?
        //  output.println("  gitURL: " + giturl);
      }
    //}

    String[][] annotations2 = matchAll(fulltext, 
     "<div data-start=\"(\\d+:\\d+)\">\\s+(.*?)\\s+</div>");
    //println(annotations2);
    if (annotations2 != null) {
     for (int j = 0; j < annotations2.length; j++) {
       //printArray(annotations2[j]);
       output.println("- start: " + annotations2[j][1]);
       output.println("  content: " + annotations2[j][2]);
       //  // optional?
       //  output.println("  gitURL: " + giturl);
     }
    }

    //annotations:
    //- start: 3.00
    //  end: 6.20
    //  content: <a href="http://github.com/shiffman/LearningProcessing/blob/master/chp03_flow/example_3_2_mouseX_mouseY/example_3_2_mouseX_mouseY.pde" target="_blank">See the code</a> for this example.
    //  gitURL: https://raw.githubusercontent.com/shiffman/LearningProcessing/master/chp03_flow/example_3_2_mouseX_mouseY/example_3_2_mouseX_mouseY.pde
    //- start: 10.20
    //  end: 14.00
    //  content: <a href="http://github.com/shiffman/LearningProcessing/blob/master/chp03_flow/example_3_2_mouseX_mouseY/example_3_2_mouseX_mouseY.pde" target="_blank">See the code</a> for this example.
    //  gitURL: https://raw.githubusercontent.com/shiffman/LearningProcessing/master/chp03_flow/example_3_2_mouseX_mouseY/example_3_2_mouseX_mouseY.pde


    output.println("---");
    output.flush();
    output.close();
  }

  println("complete");
  exit();
}