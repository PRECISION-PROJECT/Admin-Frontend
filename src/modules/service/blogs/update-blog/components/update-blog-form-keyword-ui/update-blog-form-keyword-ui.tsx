"use client";

import { Icons } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { UpdateBlogFormData } from "../../hooks";

type Props = {
  isPending: boolean;
};

const UpdateBlogFormKeywordUI = ({ isPending }: Props) => {
  const { control, setValue } = useFormContext<UpdateBlogFormData>();
  const watchedKeywords = useWatch({ control, name: "keywords" });
  const [keywordInput, setKeywordInput] = useState("");

  const addKeyword = () => {
    if (isPending) return;
    if (keywordInput.trim() && !watchedKeywords.includes(keywordInput.trim())) {
      setValue("keywords", [...watchedKeywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const removeKeyword = (keyword: string) => {
    if (isPending) return;

    setValue(
      "keywords",
      watchedKeywords.filter((k) => k !== keyword),
      {
        shouldValidate: true,
      }
    );
  };

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Keywords</h3>
      <div className="flex justify-between gap-4">
        <Input
          value={keywordInput}
          onChange={(e) => {
            setKeywordInput(e.target.value);
          }}
          containerClassName="flex-1"
          placeholder="Add a keyword"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addKeyword();
            }
          }}
        />
        <Button
          className="shrink-0"
          onClick={addKeyword}
          type="button"
          disabled={isPending}
        >
          <Icons.plusCircle className="size-4" />
          Add Keyword
        </Button>
      </div>
      {watchedKeywords.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {watchedKeywords.map((keyword, index) => (
            <Badge
              key={`${keyword}-${index}`}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {keyword}
              <Icons.x
                className="h-3 w-3 cursor-pointer pointer-events-auto!"
                onClick={(e) => {
                  e.stopPropagation();
                  removeKeyword(keyword);
                }}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdateBlogFormKeywordUI;
