package steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class Stepdefinition {
	

	
	@Given("step one")
    public void step_one() {
        System.out.println("Step number 1");
    }

    @Then("step two")
    public void step_two() {
    	System.out.println("Step number 2");
    	
    }

    @Then("step three")
    public void step_three() {
    	System.out.println("Step number 3");
    }
 

}
