export default function TNautOptions({ settings }) {
  return (
    <div className="w-full flex flex-col gap-y-7 mt-1.5">
      <div className="w-full flex items-center gap-[36px]">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            Azure Service Endpoint
          </label>
          <input
            type="url"
            name="TNautEndpoint"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder="https://my-azure.openai.azure.com"
            defaultValue={settings?.TNautEndpoint}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            API Key
          </label>
          <input
            type="password"
            name="TNautKey"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder="Azure OpenAI API Key"
            defaultValue={settings?.TNautKey ? "*".repeat(20) : ""}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            Chat Deployment Name
          </label>
          <input
            type="text"
            name="TNautModelPref"
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            placeholder="Azure OpenAI chat model deployment name"
            defaultValue={settings?.TNautModelPref}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>

      <div className="w-full flex items-center gap-[36px]">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            Chat Model Token Limit
          </label>
          <select
            name="TNautTokenLimit"
            defaultValue={settings?.TNautTokenLimit || 4096}
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            required={true}
          >
            <option value={4096}>4,096 (gpt-3.5-turbo)</option>
            <option value={16384}>16,384 (gpt-3.5-16k)</option>
            <option value={8192}>8,192 (gpt-4)</option>
            <option value={32768}>32,768 (gpt-4-32k)</option>
            <option value={128000}>
              128,000 (gpt-4-turbo,gpt-4o,gpt-4o-mini)
            </option>
          </select>
        </div>

        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-3">
            Model Type
          </label>
          <select
            name="TNautModelType"
            defaultValue={settings?.TNautModelType || "default"}
            className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
            required={true}
          >
            <option value="default">Default</option>
            <option value="reasoning">Reasoning</option>
          </select>
        </div>
      </div>
    </div>
  );
}
