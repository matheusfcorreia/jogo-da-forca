import React from 'react';
import { useSelector } from 'react-redux';

import { 
  StyledContent,
  StyledTopInfo,
  StyledDfeInfo,
  TopInfoSeparator,
  StyledDeliveryInfo,
  StyledContentSeparator,
  GraySeparator,
  StyledBottomContent,
  StyledImageList,
  StyledImage,
  BottomSeparator,
  StyledNote,
} from './style';

import { documentFormater, phoneNumberFormater } from '../../../util/format';

const Content = () => {
  const status = useSelector(s => s.deliveries.status);

  return (
    <StyledContent>
      <TopInfo />
      <ContentSeparator />
      {status === 'delivered' && <BottomContent />}
    </StyledContent>
  );
};

const TopInfo = () => {
  const status = useSelector(s => s.deliveries.status);

  return (
    <StyledTopInfo>
      <DfeInfo />
      <TopInfoSeparator status={status} />
      <DeliveryInfo />
    </StyledTopInfo>
  );
};

const DfeInfo = () => {
  const selectedDelivery = useSelector(s => s.deliveries.selectedDelivery);
  const status = useSelector(s => s.deliveries.status);

  return (
    <StyledDfeInfo status={status} >
      <p className="nfe" >NF-E {selectedDelivery.nfe.serie} / {selectedDelivery.nfe.number}</p>
      <p className="cte" >CT-E {selectedDelivery.cte.serie} / {selectedDelivery.cte.number}</p>
    </StyledDfeInfo>
  );
};

const DeliveryInfo = () => {
  const selectedDelivery = useSelector(s => s.deliveries.selectedDelivery); 

  return (
    <StyledDeliveryInfo>
      <div>
        <span>TRANSPORTADORA:</span>
        <p>{selectedDelivery.ref.name}</p>
      </div>
      <div>
        <span>MOTORISTA:</span>
        <p>{selectedDelivery.driver.name}</p>
      </div>
      <div>
        <span>DESTINO DA PRESTAÇÃO:</span>
        <p>{selectedDelivery.destination}</p>
      </div>
      <div>
        <span>CELULAR:</span>
        <p>{phoneNumberFormater(selectedDelivery.driver.phoneNumber)}</p>
      </div>
      <div className="document" >
        <span>CNPJ:</span>
        <p>
          {
            selectedDelivery.ref.cnpj ? documentFormater(selectedDelivery.ref.cnpj) : 'Não Definido'
          }
        </p>
      </div>
      <div className="document" >
        <span>CPF / CNPJ:</span>
        <p>{documentFormater(selectedDelivery.driver.document)}</p>
      </div>
    </StyledDeliveryInfo>
  );
};

const ContentSeparator = () => {
  const status = useSelector(s => s.deliveries.status);

  return (
    <StyledContentSeparator status={status} >
      <p>COMPROVAÇÃO</p>
      <GraySeparator />
    </StyledContentSeparator>
  );
};

const BottomContent = () => {
  return (
    <StyledBottomContent>
      <ImageList />
      <BottomSeparator />
      <Note />
    </StyledBottomContent>
  );
};

const ImageList = () => {
  const images = useSelector(s => s.deliveries.selectedDelivery.images); 
  
  return (
    <StyledImageList>
      { images.map((src, i) => <Image { ... { src, i, key: i } } />) }
    </StyledImageList>
  );
};

const Image = ({ src, i }) => {
  return (
    <StyledImage target="_blank" href={src} rel="noopener noreferrer" >
      <img src={src} alt={`comprovante-${i + 1}`} />
    </StyledImage>
  );
};

const Note = () => {
  const selectedDelivery = useSelector(s => s.deliveries.selectedDelivery); 

  return (
    <StyledNote>
      <span>OBSERVAÇÃO</span>
      <p>{selectedDelivery.notes}</p>
    </StyledNote>
  );
};

export default Content;