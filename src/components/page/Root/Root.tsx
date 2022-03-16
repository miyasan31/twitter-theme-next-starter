import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import { ColorChanger, ThemeChanger } from "src/components/functional/WithTheme";
import { HoverUserCard } from "src/components/ui/HoverUserCard";

import { Button } from "~/components/ui/Button";
import { Dialog } from "~/components/ui/Dialog";
import { Flex } from "~/components/ui/Flex";
import {
  AllowLeftIcon,
  AllowRightIcon,
  CloseIcon,
  DotsIcon,
  FavoriteIcon,
  ReplyIcon,
  RetweetIcon,
  ShareIcon,
} from "~/components/ui/Icon";
import { CountLabelIconButton, IconButton } from "~/components/ui/IconButton";
import { NextLink } from "~/components/ui/NextLink";
import { RadioGroup } from "~/components/ui/RadioGroup";
import { Switch } from "~/components/ui/Switch";
import { Text } from "~/components/ui/Text";

export const Root: FC = () => {
  const handleClick = () => {
    console.info("click!!");
  };

  return (
    <>
      <Text>ダークモード変更</Text>
      <ThemeChanger />

      <Text>テーマ変更</Text>
      <ColorChanger />

      <Text>アイコン</Text>
      <Flex gap={1}>
        <CountLabelIconButton color="primary" count={10}>
          <ReplyIcon size={15} />
        </CountLabelIconButton>
        <CountLabelIconButton color="green" count={100}>
          <RetweetIcon size={15} />
        </CountLabelIconButton>
        <CountLabelIconButton color="amber" count={1000}>
          <FavoriteIcon size={15} />
        </CountLabelIconButton>

        <IconButton color="primary">
          <ShareIcon size={15} />
        </IconButton>
        <IconButton color="primary">
          <DotsIcon size={15} />
        </IconButton>
      </Flex>

      <Text>ボタン</Text>
      <Flex gap={1}>
        <Button color="primary" onClick={handleClick}>
          Primary
        </Button>
        <Button color="primary" isOutline onClick={handleClick}>
          PrimaryOutline
        </Button>
        <Button color="primary" isGhost under onClick={handleClick}>
          PrimaryGhost
        </Button>
      </Flex>
      <Flex gap={1}>
        <Button color="red" onClick={handleClick}>
          Red
        </Button>
        <Button color="red" isOutline onClick={handleClick}>
          RedOutline
        </Button>
        <Button color="red" isGhost under onClick={handleClick}>
          RedGhost
        </Button>
      </Flex>
      <Flex gap={1}>
        <Button color="slate" onClick={handleClick}>
          Slate
        </Button>
        <Button color="slate" isOutline onClick={handleClick}>
          SlateOutline
        </Button>
        <Button color="slate" isGhost under onClick={handleClick}>
          SlateGhost
        </Button>
        <NextLink href="/" btn>
          Link
        </NextLink>
      </Flex>

      <Text>アイコン付き</Text>
      <Flex gap={1}>
        <Button color="primary" onClick={handleClick}>
          <AllowLeftIcon size={15} />
          Back
        </Button>
        <Button color="primary" isOutline onClick={handleClick}>
          Next
          <AllowRightIcon size={15} />
        </Button>
        <Button color="primary" isGhost onClick={handleClick}>
          <CloseIcon size={15} />
          Close
        </Button>
      </Flex>

      <Flex gap={1}>
        <Flex gap={1}>
          <Text>ラジオボタン</Text>
          <RadioGroup
            options={RADIO_OPTIONOS}
            defaultValue={RADIO_OPTIONOS[0].value}
            ariaLabel="radioGroup"
            onClick={handleClick}
          />
        </Flex>

        <Flex gap={1}>
          <Text>スイッチ</Text>
          <Switch labalLeft="off" labalRight="on" onClick={handleClick} />
        </Flex>
      </Flex>

      <Text>ユーザーカード</Text>
      <HoverUserCard
        userId="miyasan_0301"
        userName="みやさん | 学生"
        profile="みやさんです。hogehogehogehogehogehogehogehogehogehogehogehogehogehoge"
        following={40}
        followers={120}
        iconPath="https://pbs.twimg.com/profile_images/1410567316421578759/3rtKrTAL_400x400.jpg"
      />

      <Text>ダイアログ</Text>
      <Dialog
        openButtonLabel="dialog"
        title="ツイートを削除しますか？"
        subtitle="この操作は取り消せません。プロフィール、あなたをフォローしているアカウントのタイムライン、Twitterの検索結果からツイートが削除されます。"
        closeButtonLabel="キャンセル"
        icon={<MixerHorizontalIcon />}
        confirmationButtonLabel="削除する"
      />

      <Text>フォントサイズ</Text>
      <Text size="xs">xs - TextTextText</Text>
      <Text size="sm">sm - TextTextText</Text>
      <Text size="base">base - TextTextText</Text>
      <Text size="lg">lg - TextTextText</Text>
      <Text size="xl">xl - TextTextText</Text>
      <Text size="x2l">x2l - TextTextText</Text>
      <Text size="x3l">x3l - TextTextText</Text>
      <Text size="x4l">x4l - TextTextText</Text>

      <Text>デコレーション</Text>
      <Text bold>太字太字太字</Text>
      <Text faded>薄字薄字薄字</Text>
      <Text under>下線下線下線</Text>
      <Text color="blue">青字青字青字</Text>
      <Text color="red">赤字赤字赤字</Text>
    </>
  );
};

type OptionsProps = {
  id: string;
  label: string;
  value: string;
  color?: "blue" | "amber" | "crimson" | "violet" | "orange" | "green";
};

const RADIO_OPTIONOS: OptionsProps[] = [
  { id: "1", label: "OFF", value: "off" },
  { id: "2", label: "ON", value: "on" },
];
