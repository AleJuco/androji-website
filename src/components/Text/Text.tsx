type TextVariant = "largetitle" | "title" | "subtitle" | "body" | "smalltitle";

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
}

export function Text({variant = "body", children}: TextProps) {
  switch (variant) {
    case "largetitle":
      return <h1 className="text-7xl font-bold ">{children}</h1>;
    case "title":
      return <h1 className="text-5xl font-bold">{children}</h1>;
    case "smalltitle":
      return <h1 className="text-4x1 font-bold">{children}</h1>
    case "subtitle":
      return <h2 className="text-3xl font-bold">{children}</h2>;
    case "body":
      return <p className="text-2x1 font-bold">{children}</p>;
  }
}
