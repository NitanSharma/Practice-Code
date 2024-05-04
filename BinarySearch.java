public class BinarySearch {// Time-Complixity = O(logn)
    public static int Binary(int arr[], int target){
        int si=0;
        int ei=arr.length-1;

        while(si<=ei){
            int mid=(si+ei)/2;

            if(arr[mid] == target){
                return mid;
            }
            if(arr[mid] < target){
                si=mid+1;
            }else{
                ei=mid-1;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int arr[]={3,65,89,99,113};
        int target = 9;
        System.out.println(Binary(arr, target));
    }
    
}
