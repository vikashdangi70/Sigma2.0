package functionandMethod;

public class binomialCoefficient {
	
	public static int fact(int n) {
		 int f = 1 ;
		for (int i=1;i<=n;i++) {
			f=f*i;
		}
		return f ; 
	}

	public static int binomialC(int n,int r) {
		int n_fact=fact(n);
		int r_fact=fact(r);
		int nmr_fact=fact(n-r);
		int b = n_fact/(r_fact*nmr_fact);
		return b;
		
	}
	
	public static void main(String[] args) {
		System.out.println (binomialC(5,2));
	}

}
