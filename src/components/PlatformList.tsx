import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { GamePlatform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface PlatformListProps {
  platforms: GamePlatform[];
}

export default function PlatformList({ platforms }: PlatformListProps) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map(({ slug }) => {
        return <Icon key={slug} as={iconMap[slug]} color="gray.500"/>;
      })}
    </HStack>
  );
}
