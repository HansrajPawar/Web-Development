function bmiCalculator (weight, height) {
    var bmi = weight /(height*height);
    if(bmi >24.9)
    {
        interpretation = "Your BMI is " + bmi + "so you are overweight.";
    }
    else if(bmi>18.5 && bmi<24.9)
    {
        interpretation = "Your BMI is " + bmi + "so you have a normal weight.";
        
    }
    else{
        interpretation = "Your BMI is " + bmi + "so you have underweight";
    }
    return interpretation;
}

interpretation = bmiCalculator(65,1.65);