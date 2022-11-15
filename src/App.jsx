import { Backdrop, Modal, ButtonClose, ModalInfo, ModalInfoImg, ImgPet, ImgLabel, InfoPet, InfoPetTitle, InfoPetList, InfoPetItem, InfoPetSpan, Comments, CommentsSpan, BtnContainer, AddToFaforite,Contact
} from './App.styled'

const App =() => {
  return (
   <Backdrop>
       <Modal>
          <ButtonClose>
          </ButtonClose>
          <ModalInfo>
            <ModalInfoImg>
              <ImgPet src="" alt="" width="240" height="240" />
              <ImgLabel>In good hands</ImgLabel>
            </ModalInfoImg>

            <InfoPet>
              <InfoPetTitle>Сute dog looking for a home</InfoPetTitle>
              <InfoPetList>
                <InfoPetItem>Name: <InfoPetSpan>Rich</InfoPetSpan></InfoPetItem>
                <InfoPetItem>Birthday: <InfoPetSpan>Rich</InfoPetSpan></InfoPetItem>
                <InfoPetItem>Breed: <InfoPetSpan>Rich</InfoPetSpan></InfoPetItem>
                <InfoPetItem>Place: <InfoPetSpan>Rich</InfoPetSpan></InfoPetItem>
                <InfoPetItem>The sex: <InfoPetSpan>Rich</InfoPetSpan></InfoPetItem>
                <InfoPetItem>Email: <InfoPetSpan>Rich</InfoPetSpan></InfoPetItem>
                <InfoPetItem>Phone: <InfoPetSpan>Rich</InfoPetSpan></InfoPetItem>
              </InfoPetList>
            </InfoPet>
          </ModalInfo>
          <Comments>
            <CommentsSpan>Comments:</CommentsSpan>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur Lorem ipsum dolor sit amet, consectetur Lorem
          </Comments>
          <BtnContainer>
            <AddToFaforite >Add to</AddToFaforite>
            <Contact  href="tel:123456789">Contact</Contact>
          </BtnContainer>
        </Modal>
      </Backdrop>
  );
};

  
 
export default App;
