#!/bin/bash

# Step 1: Delete the /build folder
echo "Deleting the /build folder..."
rm -rf ./build

# Check if the delete operation was successful
if [ $? -eq 0 ]; then
    echo "/build folder deleted successfully."
else
    echo "/build folder deletion failed." >&2
    exit 1
fi

# Step 2: Run npm build
echo "Running npm build..."
npm run build

# Step 3: Delete everything in the S3 bucket
echo "Deleting all files in S3 bucket..."
aws s3 rm s3://cloud-ai.biz --recursive

# Check if the delete operation was successful
if [ $? -eq 0 ]; then
    echo "Files in S3 bucket deleted successfully."
else
    echo "File deletion in S3 bucket failed." >&2
    exit 1
fi

# Step 4: Upload all files in the /build folder to the S3 bucket
echo "Uploading files to S3 bucket..."
aws s3 cp ./build s3://cloud-ai.biz --recursive

# Check if the upload operation was successful
if [ $? -eq 0 ]; then
    echo "Files uploaded successfully."
else
    echo "File upload failed." >&2
    exit 1
fi

echo "Deployment completed successfully."