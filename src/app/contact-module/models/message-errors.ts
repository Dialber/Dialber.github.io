export interface MessageErrors {
    formControlName:string;
    validators:Validator[];
}

export interface Validator {
    name:string;
    message:string;
}
export const errosRegister:MessageErrors[]=[
    {
        formControlName:"name",
        validators:[
           {
                name:"required",
                message:"El usuario es requerido"
           },
           {
                name:"minLength",
                message:"El usuario debe tener mínimo 4 carácteres"
           }
        ]
    },
    {
        formControlName:"email",
        validators:[
            {
                name:"required",
                message:"El correo es requerido"
            },
            {
                name:"email",
                message:"El correo es inválido"
            },
        ]
    },
    {
        formControlName:"subject",
        validators:[
            {
                name:"required",
                message:"El asunto es requerido"
            }
        ]
    }
]
