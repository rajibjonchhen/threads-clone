function Page({params}:{params : {id : string }}) {

    return ( 
        <h1 className = 'text-light-2'>thread detail{params.id}</h1>
     );
}

export default Page;