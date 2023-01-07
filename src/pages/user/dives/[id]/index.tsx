import type { CustomNextPage } from "../../../_app";
import { useRouter } from "next/router";
import {
  TbTemperature,
  TbArrowBarToDown,
  TbCalendarTime,
  TbDeviceFloppy,
  TbHash,
  TbLicense,
  TbHourglass,
  TbFold,
  TbMapPin,
  TbTemperatureMinus,
  TbTemperaturePlus,
  TbWind,
  TbBarbell,
  TbBattery,
  TbBattery1,
  TbBattery4,
  TbStar,
  TbTag,
  TbRipple,
  TbAward,
  TbCloud,
  TbDroplet,
  TbFall,
  TbFlag,
  TbHaze,
  TbSalt,
  TbBatteryCharging,
  TbLink,
  TbTrash,
  TbPlus,
  TbFile,
  TbPhoto,
  TbPaperclip
} from 'react-icons/tb'
import IconButton from "../../../../components/IconButton";
import { trpc } from "../../../../utils/trpc";
import ErrorBox from "../../../../components/ErrorBox";
import { getParameter } from "../../../../utils/router";

const ViewDivePage: CustomNextPage = () => {
  const router = useRouter()
  const id = getParameter(router, 'id')
  if (!id) return <ErrorBox message="Invalid dive id, check that the url is correct." />

  const { data: dive } = trpc.dive.getDive.useQuery({ id })

  return (
    <div>
      <pre >
        <code>{JSON.stringify(dive, null, 2)}</code>
      </pre >
    </div>
  );
};

ViewDivePage.title = 'View dive'

export default ViewDivePage;

