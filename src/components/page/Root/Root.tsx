import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import { ColorChanger, ThemeChanger } from "src/components/provider/WithTheme";
import { HoverUserCard } from "src/components/shared/HoverUserCard";

import { Button } from "~/components/shared/Button";
import { Dialog } from "~/components/shared/Dialog";
import { Flex } from "~/components/shared/Flex";
import {
  AllowLeftIcon,
  AllowRightIcon,
  CloseIcon,
  DotsIcon,
  FavoriteIcon,
  ReplyIcon,
  RetweetIcon,
  ShareIcon,
} from "~/components/shared/Icon";
import { CountLabelIconButton, IconButton } from "~/components/shared/IconButton";
import { NextLink } from "~/components/shared/NextLink";
import { RadioGroup } from "~/components/shared/RadioGroup";
import { Switch } from "~/components/shared/Switch";
import { Text } from "~/components/shared/Text";

export const Root: FC = () => {
  const onClick = () => {
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
        <Button color="primary" onClick={onClick}>
          Primary
        </Button>
        <Button color="primary" isOutline onClick={onClick}>
          PrimaryOutline
        </Button>
        <Button color="primary" isGhost under onClick={onClick}>
          PrimaryGhost
        </Button>
      </Flex>
      <Flex gap={1}>
        <Button color="red" onClick={onClick}>
          Red
        </Button>
        <Button color="red" isOutline onClick={onClick}>
          RedOutline
        </Button>
        <Button color="red" isGhost under onClick={onClick}>
          RedGhost
        </Button>
      </Flex>
      <Flex gap={1}>
        <Button color="slate" onClick={onClick}>
          Slate
        </Button>
        <Button color="slate" isOutline onClick={onClick}>
          SlateOutline
        </Button>
        <Button color="slate" isGhost under onClick={onClick}>
          SlateGhost
        </Button>
        <NextLink href="/" btn>
          Link
        </NextLink>
      </Flex>

      <Text>アイコン付き</Text>
      <Flex gap={1}>
        <Button color="primary" onClick={onClick}>
          <AllowLeftIcon size={15} />
          Back
        </Button>
        <Button color="primary" isOutline onClick={onClick}>
          Next
          <AllowRightIcon size={15} />
        </Button>
        <Button color="primary" isGhost onClick={onClick}>
          <CloseIcon size={15} />
          Close
        </Button>
      </Flex>

      <Flex gap={1}>
        <Flex gap={1}>
          <Text>ラジオボタン</Text>
          <RadioGroup
            options={RADIO_OPTIONS}
            defaultValue={RADIO_OPTIONS[0].value}
            ariaLabel="radioGroup"
            onClick={onClick}
          />
        </Flex>

        <Flex gap={1}>
          <Text>スイッチ</Text>
          <Switch labalLeft="off" labalRight="on" onClick={onClick} />
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

const RADIO_OPTIONS: OptionsProps[] = [
  { id: "1", label: "OFF", value: "off" },
  { id: "2", label: "ON", value: "on" },
];
