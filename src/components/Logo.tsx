import { LucideOctagon } from "lucide-react";
import Span from "./Span";
import Box from "./Box";

const Logo = () => {
  return (
    <Box className="logo">
      <LucideOctagon /> <Span> Coding Conf</Span>
    </Box>
  );
};

export default Logo;
