import java.time.LocalDate;
import java.time.Period;
import java.util.Scanner;

public class AgeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input: Birthdate (YYYY-MM-DD)
        System.out.print("Enter your birthdate (YYYY-MM-DD): ");
        String birthdateString = scanner.nextLine();

        // Parse the input string to LocalDate
        LocalDate birthdate = LocalDate.parse(birthdateString);

        // Calculate age
        LocalDate currentDate = LocalDate.now();
        Period age = Period.between(birthdate, currentDate);

        // Display age
        System.out.println("Your age is:");
        System.out.println("Years: " + age.getYears());
        System.out.println("Months: " + age.getMonths());
        System.out.println("Days: " + age.getDays());

        scanner.close();
    }
}
