import { Title, Text , ErrorWrapper} from "./Error.styled";
import { Link } from "components/InfoText/InfoText.styled";
import { PageWrapper } from "pages/Catalog/Catalog.styled";

const Error = () => {
  return (
    <PageWrapper>
      <ErrorWrapper>
        <Title>404</Title>
        <Text>
          Sorry, you have reached a page that we could not find. It seems that
          you are lost among the numbers and letters of our virtual space.
          Perhaps this page went on vacation or decided to disappear into
          another dimension. We apologize for this inconvenience.
        </Text>
        <Link to={"/"}>To Home</Link>
      </ErrorWrapper>
    </PageWrapper>
  );
};

export default Error;
