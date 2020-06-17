class Form {
    constructor(){
        this.que2 = createElement('h4',"Have you come into close contact (within 6 feet) with someone who has a laboratory confirmed COVID – 19 diagnosis in the past 14 days?");
        this.que2.style('color', 'rgb(0,0,0)');

        this.opt1 = createRadio('h5');
        this.opt1.option('YES');
        this.opt1.option('NO');
        this.opt1.style('width', '60px');

        this.que3 = createElement('h4',"Do you have any of the following:  fever or chills, cough, shortness of breath or difficulty breathing, body aches, headache, new loss of taste or smell, sore throat?");
        this.que3.style('color', 'rgb(0,0,0)');

        this.opt2 = createRadio('h5');
        this.opt2.option('YES');
        this.opt2.option('NO');
        this.opt2.style('width', '60px');
    }
    
    display(){
        //write the title you want to place at the top
        var title = createElement('h2');
        title.html("Give a Survey for COVID-19 (Corona Virus)");
        title.position(400,100);
        
        var input = createInput("Your Name");
         input.position(400,200);

        var button = createButton('Submit');
         button.position(1090,560);

         var age = createInput("Your Age");
         age.position(600,200);

         var school = createInput("Your School");
         school.position(800,200);

         this.que2.position(350, 250);
         this.opt1.position(350, 300);
 
         this.que3.position(350, 400);
         this.opt2.position(350, 460);
 

        button.mousePressed(function(){
            input.hide();
            button.hide();
            age.hide();
            school.hide();
            
            var name = input.value();
            voterCount+=1;
            voter.update(name);
            voter.updateCount(voterCount);
            
            var greeting = createElement('h3');
            greeting.html("~ Thank You for Submitting " + name + " ~");
            greeting.position(400,200);

        });
    }
}