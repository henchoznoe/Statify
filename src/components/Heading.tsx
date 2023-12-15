type Props = {
  title: string;
}

const Heading = ({ title }: Props) => {
  return (
    <div className="flex w-full justify-center pb-8 pt-6">
      <h1>
        <span className="text-4xl font-montserrat font-extrabold sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-spotify to-green-600">{title}</span>
      </h1>
    </div>
  );
};

export default Heading;