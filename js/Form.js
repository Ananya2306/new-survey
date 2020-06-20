class Form {
    constructor(){
        // write questions
        this.id = createElement('h4',"Fill The Personal Information :-");
        this.id.style('color', 'rgb(0,0,0)');
      
        this.que4 = createElement('h4',"In which age group the COVID-19 spreads ?");
        this.que4.style('color', 'rgb(0,0,0)');

        this.opt3 = createRadio('h5');
        this.opt3.option('COVID-19 occur in all age groups.');
        this.opt3.option('Coronavirus infection is mild in children.');
        this.opt3.option('Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.');
        this.opt3.option('All of the above are correct');
        this.opt3.style('height', '60px');

        this.que3 = createElement('h4',"Have you travelled internationally in past 14 days ? ");
        this.que3.style('color', 'rgb(0,0,0)');

        this.opt2 = createRadio('h5');
        this.opt2.option('YES');
        this.opt2.option('NO');
        this.opt2.style('width', '60px');

        this.que1 = createElement('h4',"Do you have any of the following symptoms :- ");
        this.que1.style('color', 'rgb(0,0,0)');

        this.opt = createRadio('h5');
        this.opt.option('Fever');
        this.opt.option('Cough');
        this.opt.option('Shortness of breath');
        this.opt.option('All of the above');
        this.opt.option('None of above');
        this.opt.style('height', '10px');

        this.que2 = createElement('h4',"Have you come into close contact (within 6 feet) with someone who has a laboratory confirmed COVID – 19 diagnosis in the past 14 days?");
        this.que2.style('color', 'rgb(0,0,0)');

        this.opt1 = createRadio('h5');
        this.opt1.option('YES');
        this.opt1.option('NO');
        this.opt1.style('width', '60px');

    }
    
    display(){
        //write the title you want to place at the top
        var title = createElement('h2');
        title.html("Give a Survey for COVID-19 (Corona Virus)");
        title.position(400,20);
        // take deitals of person
        var input = createInput("Your Name");
         input.position(150,100);

         var age = createInput("Your Age");
         age.position(150,150);

         var school = createInput("Your School / Office");
         school.position(150,200);

         var BG = createInput("Your Blood Group");
         BG.position(150,250);

         var gender = createInput("Male Or Female");
         gender.position(150,300);

         // Create submit button
         var button = createButton('Submit');
         button.position(1090,560);

         // Display the questions you have written above 
         this.id.position(100, 50);

         this.que1.position(350, 100);
         this.opt.position(350, 150);

         this.que2.position(350, 200);
         this.opt1.position(350, 250);
 
         this.que3.position(350, 400);
         this.opt2.position(350, 450);
 
        this.que4.position(350, 300);
         this.opt3.position(350, 350);

         // create function for when we click on submit button what will happen
        button.mousePressed(function(){
            //deitals of person hide 
            input.hide();
            button.hide();
            age.hide();
            school.hide();
            BG.hide();
            gender.hide();

            // show the name of the person 
            var name = input.value();
            voterCount+=1;
            voter.update(name);
            voter.updateCount(voterCount);
            // Create a greeting for person at the end by using his/her name 
            var greeting = createElement('h3');
            greeting.html("~ Thank You for Submitting " + name + " ~  You are safe  ~");
            greeting.position(500,500);
    
        });
    }
}