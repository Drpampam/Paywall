import {
  NewsletterDiv,
  NewsletterHeader,
  NewsletterHeading,
  NewsletterText,
  NewsletterPara,
  NewsletterInputDiv,
  NewsletterInput,
  NewsletterEmail,
  NewsletterButton,
  NewsletterBtn,
  NewsletterSpam,
} from "./newsletter.styles";

const Newsletter = () => {
  return (
    <>
      <NewsletterDiv>
        <NewsletterHeader>
          <NewsletterHeading>Subscribe on our Newsletter</NewsletterHeading>
        </NewsletterHeader>
        <NewsletterText>
          <NewsletterPara>
          Stay up to date! Sign up to our newsletter to receive the latest news
          to your email. You may unsubscribe from our list at any time.
          </NewsletterPara>
        </NewsletterText>
        <NewsletterInputDiv>
          <NewsletterInput>
            <NewsletterEmail placeholder="@ Email" />
          </NewsletterInput>
          <NewsletterButton>
            <NewsletterBtn>Subscribe</NewsletterBtn>
          </NewsletterButton>
        </NewsletterInputDiv>
        <NewsletterSpam>
          <NewsletterPara>
            We will never spam you. Only useful mails with promo and events
          </NewsletterPara>
        </NewsletterSpam>
      </NewsletterDiv>
    </>
  );
};

export default Newsletter;
