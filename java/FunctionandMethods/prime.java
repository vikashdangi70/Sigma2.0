package functionandMethod;

public class prime {
	public static boolean isPrime(int n) {
//		boolean isPrime = true;
		for (int i =2;i<=n-1;i++) {
			if(n%i==0) {
				return false ;
			}
		}
		return true;
	}
	
	public static void main(String[] argas) {
		System.out.println(isPrime(3));	}

}
