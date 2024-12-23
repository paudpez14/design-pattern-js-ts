class SingletonTS {
    // * propiedad que pertenece a la clase
    private static instance : SingletonTS;
    public random : number;

    private constructor(){
        this.random = Math.random();
    }
    // * metodo que pertenece a la clase
    public static getInstance(): SingletonTS{
        if(!SingletonTS.instance){
            SingletonTS.instance = new SingletonTS();
        }
        return SingletonTS.instance;
    }


}