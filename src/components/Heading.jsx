

const Heading = ({title , subtitle}) => {
    return (
        <div className="flex flex-col w-full justify-center items-center mx-12 ">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-thin mt-6">{title}</h1>
            <p className="text-xs md:text-base text-gray-600 text-center font-thin mt-3">{subtitle}</p>
            
        </div>
    );
};

export default Heading;