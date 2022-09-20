import React from "react";
import Link from "next/link";
import { Container } from "./styles";

interface Props {
  linkItem?: string,
  iconItem?: React.ComponentElement<HTMLImageElement, any>,
  iconSrc?: string,
  titleItem: string,
};

export default function ItemList({ linkItem, iconItem, iconSrc, titleItem }: Props){
  return(
    <Container>
      <Link href={linkItem ? linkItem : ""}>
        <a>
          {iconItem ? (
            <>
              {iconItem}
            </>
          ):(
            <img id="image" src={iconSrc} alt="" />
          )}
          <span>{titleItem}</span>
        </a>
      </Link>
    </Container>
  )
};